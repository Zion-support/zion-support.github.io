import React, { useState } from 'react'
import Head from 'next/head'
interface Slide {
  id: string
  title: string
  content: string
  chart?: {
    type: string
    data: Array<{ label: string; value: number }>
  }
}

const AdminPitchGeneratorPage: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [builder, setBuilder] = useState({
    companyName: '',
    stage: '',
    targetRaise: '',
    assets: [] as string[]
  })
  const addSlide = () => {
    const newSlide: Slide = {
      id: Date.now().toString(),
      title: 'New Slide',
      content: 'Enter your content here...'
    }
    setSlides([...slides, newSlide])
  }
  const updateActiveSlide = (updates: Partial<Slide>) => {
    if (activeIndex >= 0 && activeIndex < slides.length) {
      const updatedSlides = [...slides]
      updatedSlides[activeIndex] = { ...updatedSlides[activeIndex], ...updates }
      setSlides(updatedSlides)
    }
  }
  const activeSlide = slides[activeIndex]
  return (
    <>
      <Head>
        <title>Pitch Generator - Admin</title>
        <meta name="description" content="Generate pitch decks and presentations" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Pitch Generator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Builder Panel */}
          <div className="space-y-4">
            <div className="border rounded-md p-4 bg-white">
              <h2 className="font-medium mb-3">Project Details</h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm mb-1">Company Name</label>
                  <input
                    value={builder.companyName}
                    onChange={(e) => setBuilder({ ...builder, companyName: e.target.value })}
                    className="w-full border rounded px-2 py-1"
                    placeholder="Enter company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Stage</label>
                  <select
                    value={builder.stage}
                    onChange={(e) => setBuilder({ ...builder, stage: e.target.value })}
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="">Select Stage</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                    <option value="series-b">Series B</option>
                    <option value="token-sale">Token Sale</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Target Raise Amount</label>
                  <input
                    value={builder.targetRaise}
                    onChange={(e) => setBuilder({ ...builder, targetRaise: e.target.value })}
                    className="w-full border rounded px-2 py-1"
                    placeholder="e.g., $1M, $5M"
                  />
                </div>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-white">
              <h2 className="font-medium mb-3">Assets</h2>
              <div className="border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500">
                Drag & drop logos, photos here
                <div className="text-xs mt-1">{builder.assets.length} file(s) added</div>
              </div>
            </div>
          </div>

          {/* Slides Panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border rounded-md p-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-medium">Slides ({slides.length} total)</h2>
                <button
                  onClick={addSlide}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                >
                  Add Slide
                </button>
              </div>
              
              <div className="flex gap-3 overflow-x-auto py-2">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-48 shrink-0 border rounded-md p-3 cursor-pointer ${
                      index === activeIndex ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <h3 className="font-medium text-sm truncate">{slide.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{slide.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Slide Editor */}
            {activeSlide && (
              <div className="border rounded-md p-4 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <input
                    value={activeSlide.title}
                    onChange={(e) => updateActiveSlide({ title: e.target.value })}
                    className="font-semibold text-lg border-b focus:outline-none flex-1 mr-4"
                    placeholder="Slide title"
                  />
                  <button
                    onClick={() => setLoading(!loading)}
                    disabled={loading}
                    className="px-3 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Rephrase'}
                  </button>
                </div>
                
                <textarea
                  value={activeSlide.content}
                  onChange={(e) => updateActiveSlide({ content: e.target.value })}
                  className="w-full border rounded px-2 py-1"
                  rows={10}
                  placeholder="Enter slide content..."
                />
                
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <button
                    onClick={() => updateActiveSlide({
                      chart: {
                        type: 'bar',
                        data: [
                          { label: 'Q1', value: 20 },
                          { label: 'Q2', value: 40 },
                          { label: 'Q3', value: 60 },
                          { label: 'Q4', value: 80 }
                        ]
                      }
                    })}
                    className="border rounded px-2 py-1 hover:bg-gray-50"
                  >
                    Bar Chart
                  </button>
                  <button
                    onClick={() => updateActiveSlide({
                      chart: {
                        type: 'funnel',
                        data: [
                          { label: 'Visitors', value: 100 },
                          { label: 'Signups', value: 40 },
                          { label: 'Projects', value: 15 }
                        ]
                      }
                    })}
                    className="border rounded px-2 py-1 hover:bg-gray-50"
                  >
                    Funnel
                  </button>
                  <button
                    onClick={() => updateActiveSlide({
                      chart: {
                        type: 'timeline',
                        data: [
                          { label: 'MVP', value: 2023 },
                          { label: 'Seed', value: 2024 },
                          { label: 'Series A', value: 2025 }
                        ]
                      }
                    })}
                    className="border rounded px-2 py-1 hover:bg-gray-50"
                  >
                    Timeline
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
export default AdminPitchGeneratorPage