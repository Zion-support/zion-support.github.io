import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

export function EnhancedNewsletterForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full max-w-lg mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6'>
      <div className='flex items-center mb-4'>
        <div className='p-2 bg-blue-100 rounded-full text-blue-600 mr-3'>
          <Mail className='h-6 w-6' />
        </div>
        <div>
          <h3 className='text-lg font-bold text-gray-900'>Stay Updated</h3>
          <p className='text-gray-600 text-sm'>
            Get exclusive offers, trending AI news and early access to best deals
          </p>
        </div>
      </div>
      {isSubmitted ? (
        <div className='text-center p-4 rounded-lg bg-green-50 border border-green-200'>
          <p className='text-green-800 font-medium'>Thank you for subscribing!</p>
          <p className='text-green-600 mt-1'>
            We'll keep you updated with the latest from Zion.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2'
        >
          <label htmlFor='enhanced-newsletter-email' className='sr-only'>
            Email address for newsletter subscription
          </label>
          <Input
            type='email'
            id='enhanced-newsletter-email'
            name='email'
            placeholder='Enter your email'
            className='flex-grow bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            autoComplete='email'
            required
          />
          <Button
            type='submit'
            disabled={isSubmitting}
            className='bg-blue-600 hover:bg-blue-700 text-white'
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      )}
      <div className='mt-4 flex items-center text-xs text-gray-500'>
        <div className='flex -space-x-1 mr-2'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center text-blue-600'
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>
  )
};