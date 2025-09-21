import React, { useState, useEffect } from 'react',
import Header from "@/components/Header",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
export default function ContentGenerator() {
  const [content, setContent] = useState('');

  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Content Generator
        </h1>
        <div className="max-w-2xl mx-auto">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blog">Blog Post</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
            </SelectContent>
          </Select>
          <Button className="mt-4">Generate Content</Button>
        </div>
      </div>
    </div>
  );
}