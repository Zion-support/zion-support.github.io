import React, { useState } from 'react';
import Head from 'next/head';

interface Slide {
  id: string;
  title: string;
  content: string;
}

export default function PitchGenerator() {
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: '1',
      title: 'Problem Statement',
      content: 'Identify the key problem your solution addresses and why it matters to your target audience.'
    },
    {
      id: '2',
      title: 'Solution Overview',
      content: 'Present your solution and how it directly addresses the identified problem.'
    }
  ]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);

  const addSlide = () => {
    const newSlide: Slide = {
      id: Date.now().toString(),
      title: 'New Slide',
      content: 'Add your content here...'
    };
    setSlides([...slides, newSlide]);
  };

  const updateSlide = (id: string, updates: Partial<Slide>) => {
    setSlides(slides.map(slide => 
      slide.id === id ? { ...slide, ...updates } : slide
    ));
  };

  const deleteSlide = (id: string) => {
    setSlides(slides.filter(slide => slide.id !== id));
    if (activeSlide >= slides.length - 1) {
      setActiveSlide(Math.max(0, slides.length - 2));
    }
  };

  const currentSlide = slides[activeSlide];

  if (isPresenting) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Head>
          <title>Pitch Presentation - Zion Tech Group</title>
        </Head>
        <div className="max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">{currentSlide?.title}</h1>
            <p className="text-xl text-gray-300">{currentSlide?.content}</p>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            
            <span className="text-sm text-gray-400">
              {activeSlide + 1} of {slides.length}
            </span>
            
            <button
              onClick={() => setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))}
              disabled={activeSlide === slides.length - 1}
              className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsPresenting(false)}
              className="px-6 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Exit Presentation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pitch Generator - Zion Tech Group</title>
      </Head>
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Pitch Deck Generator</h1>
          <div className="space-x-2">
            <button
              onClick={() => setIsPresenting(true)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Present
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Slide List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Slides</h2>
                <button
                  onClick={addSlide}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                >
                  Add Slide
                </button>
              </div>
              
              <div className="space-y-2">
                {slides.map((slide, index) => (
                  <div key={slide.id} className="flex items-center space-x-2">
                    <div
                      className={`p-4 border rounded cursor-pointer transition-colors flex-1 ${
                        activeSlide === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveSlide(index)}
                    >
                      <h3 className="font-semibold text-sm mb-2">{slide.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-3">{slide.content}</p>
                    </div>
                    <button
                      onClick={() => deleteSlide(slide.id)}
                      className="text-xs px-2 py-1 bg-red-200 rounded hover:bg-red-300"
                    >
                      Del
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Edit Slide</h2>
              
              {currentSlide && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={currentSlide.title}
                      onChange={(e) => updateSlide(currentSlide.id, { title: e.target.value })}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <textarea
                      value={currentSlide.content}
                      onChange={(e) => updateSlide(currentSlide.id, { content: e.target.value })}
                      rows={8}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}