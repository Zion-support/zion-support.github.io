import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;
  };
  keyPoints: string[];
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  };
}

export function AIListingGenerator({ onApplyGenerated, initialValues }: AIListingGeneratorProps) {
  const [title, setTitle] = useState(initialValues?.title || '')
  const [category, setCategory] = useState(initialValues?.category || '')
  const [keyFeatures, setKeyFeatures] = useState(initialValues?.keyFeatures || '')
  const [targetAudience, setTargetAudience] = useState(initialValues?.targetAudience || '')
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    switch (field) {
      case 'title':
        setTitle(e.target.value)
        break
      case 'category':
        setCategory(e.target.value)
        break
      case 'keyFeatures':
        setKeyFeatures(e.target.value)
        break
      case 'targetAudience':
        setTargetAudience(e.target.value)
        break
    }
  }

  const handleGenerate = async () => {
    if (!title || !category) {
      toast({
        title: "Missing Information";
        description: "Please provide both title and category.";
        variant: "destructive";
      })
      return
    }

    setIsLoading(true)
    try {
      // Simulate AI generation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const mockContent: GeneratedContent = {
        description: `A comprehensive ${category.toLowerCase()} solution that ${title.toLowerCase()}. Perfect for ${targetAudience || 'businesses'} looking to enhance their operations with cutting-edge technology.`;
        tags: [category, 'AI-powered', 'automation', 'productivity', 'innovation'],
        suggestedPrice: {
          min: 99;
          max: 499
        };
        keyPoints: [
          `Advanced ${category.toLowerCase()} capabilities`;
          'Easy to use and implement';
          '24/7 customer support',
          'Regular updates and improvements'
        ]
      }
      
      setGeneratedContent(mockContent)
      toast({
        title: "Content Generated";
        description: "AI has generated optimized content for your listing.";
      })
    } catch (error) {
      toast({
        title: "Generation Failed";
        description: "Failed to generate content. Please try again.";
        variant: "destructive";
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent)
      toast({
        title: "Content Applied";
        description: "Generated content has been applied to your listing.";
      })
    }
  }

  return (
    <div className='space-y-6'>
      <Card className='border border-blue-200 bg-blue-50'>
        <CardHeader>
          <CardTitle className='flex items-center text-gray-900'>
            <Sparkles className='h-5 w-5 mr-2 text-blue-600' />
            AI Listing Optimizer
          </CardTitle>
          <p className='text-sm text-gray-600'>
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <label htmlFor='title' className='text-sm font-medium text-gray-700'>
              Title
            </label>
            <Input
              id='title'
              value={title}
              onChange={e => handleInputChange(e, 'title')}
              placeholder='Enter your product or service title'
              className='bg-white border-gray-300 text-gray-900'
              disabled={isLoading}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='category' className='text-sm font-medium text-gray-700'>
              Category
            </label>
            <Input
              id='category'
              value={category}
              onChange={e => handleInputChange(e, 'category')}
              placeholder='e.g. AI Tool, Digital Product, Service'
              className='bg-white border-gray-300 text-gray-900'
              disabled={isLoading}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='keyFeatures' className='text-sm font-medium text-gray-700'>
              Key Features (Optional)
            </label>
            <Textarea
              id='keyFeatures'
              value={keyFeatures}
              onChange={e => handleInputChange(e, 'keyFeatures')}
              placeholder='Briefly describe the main features or benefits'
              className='bg-white border-gray-300 text-gray-900 min-h-20'
              disabled={isLoading}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='targetAudience' className='text-sm font-medium text-gray-700'>
              Target Audience (Optional)
            </label>
            <Input
              id='targetAudience'
              value={targetAudience}
              onChange={e => handleInputChange(e, 'targetAudience')}
              placeholder='e.g. Developers, Marketers, Startups'
              className='bg-white border-gray-300 text-gray-900'
              disabled={isLoading}
            />
          </div>
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white mt-2'
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
        </CardContent>
      </Card>
      
      {isLoading && (
        <Card className='border border-blue-200 bg-blue-50 overflow-hidden'>
          <CardHeader>
            <Skeleton className='h-8 w-3/4 bg-blue-200' />
          </CardHeader>
          <CardContent className='space-y-4'>
            <Skeleton className='h-32 w-full bg-blue-200' />
            <div className='flex flex-wrap gap-2'>
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className='h-6 w-16 bg-blue-200' />
              ))}
            </div>
            <Skeleton className='h-8 w-1/3 bg-blue-200' />
            <div className='space-y-2'>
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className='h-6 w-full bg-blue-200' />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      
      {generatedContent && !isLoading && (
        <Card className='border border-blue-200 bg-blue-50'>
          <CardHeader>
            <CardTitle className='text-gray-900'>Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className='text-sm font-medium text-gray-700 mb-2'>
                Description
              </h3>
              <p className='text-gray-900'>{generatedContent.description}</p>
            </div>
            <div>
              <h3 className='text-sm font-medium text-gray-700 mb-2'>
                Tags
              </h3>
              <div className='flex flex-wrap gap-2'>
                {generatedContent.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className='text-sm font-medium text-gray-700 mb-2'>
                Suggested Price Range
              </h3>
              <p className='text-gray-900'>
                ${generatedContent.suggestedPrice.min.toFixed(2)} - $
                {generatedContent.suggestedPrice.max.toFixed(2)}
              </p>
            </div>
            <div>
              <h3 className='text-sm font-medium text-gray-700 mb-2'>
                Key Selling Points
              </h3>
              <ul className='list-disc pl-5 text-gray-900 space-y-1'>
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleApply}
              className='w-full bg-green-600 hover:bg-green-700 text-white'
            >
              Apply to My Listing
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}