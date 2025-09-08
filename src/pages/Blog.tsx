import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Blog</CardTitle>
          <CardDescription>
            Latest insights and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Stay updated with our latest blog posts and industry insights.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Blog