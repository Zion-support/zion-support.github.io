import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface GeneratedContent {
  title: string;
  description: string;
  keyFeatures: string[];
  targetAudience: string;
}

interface AIListingGeneratorProps {
  onApplyGenerated: (content: GeneratedContent) => void;
  initialValues?: Partial<GeneratedContent>;
}

export function AIListingGenerator({ onApplyGenerated, initialValues }: AIListingGeneratorProps) {
  const [title, setTitle] = useState(initialValues?.title || '')
  const [category, setCategory] = useState('')
  const [keyFeatures, setKeyFeatures] = useState(initialValues?.keyFeatures?.join(', ') || '')
  const [targetAudience, setTargetAudience] = useState(initialValues?.targetAudience || '')
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)

  const handleGenerate = async () => {
    setIsLoading(true)
    try {
      // Simulate AI generation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const content: GeneratedContent = {
        title: title || 'AI-Generated Service Title',
        description: `This is an AI-generated description for ${title || 'your service'}. It includes key features and benefits that will help attract customers.`,
        keyFeatures: keyFeatures.split(',').map(f => f.trim()).filter(f => f),
        targetAudience: targetAudience || 'General audience'
      }
      
      setGeneratedContent(content)
    } catch (error) {
      console.error('Error generating content:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleApply = () => {
    if (generatedContent) {
      onApplyGenerated(generatedContent)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter service title"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">
              Category
            </label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter service category"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">
              Key Features (Optional)
            </label>
            <Textarea
              id="keyFeatures"
              value={keyFeatures}
              onChange={(e) => setKeyFeatures(e.target.value)}
              placeholder="Enter key features separated by commas"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">
              Target Audience (Optional)
            </label>
            <Input
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="Enter target audience"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white"
          >
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Optimized Content
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {isLoading && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
          <CardHeader>
            <div className="h-8 w-3/4 bg-zion-blue-light/20 animate-pulse" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-32 w-full bg-zion-blue-light/20 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-6 w-16 bg-zion-blue-light/20 animate-pulse" />
              ))}
            </div>
            <div className="h-8 w-1/3 bg-zion-blue-light/20 animate-pulse" />
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-full bg-zion-blue-light/20 animate-pulse"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {generatedContent && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
              <p className="text-white">{generatedContent.description}</p>
            </div>
            {generatedContent.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {generatedContent.keyFeatures.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Target Audience</h3>
              <p className="text-white">{generatedContent.targetAudience}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleApply}
              className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white"
            >
              <ArrowRight className="h-4 w-4 mr-2" />
              Apply Generated Content
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}