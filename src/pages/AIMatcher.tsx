import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const AIMatcher: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>AI Talent Matcher</CardTitle>
          <CardDescription>
            Find the perfect talent match using our AI-powered matching system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This feature is coming soon. Our AI will analyze your requirements and match you with the best talent.
          </p>
          <Button className="mt-4">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default AIMatcher