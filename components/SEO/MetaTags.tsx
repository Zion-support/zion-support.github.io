import React from 'react'
"use client"
interface MetaTagsProps {
  className?: string
}
const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>MetaTags</h2>
      <p>This component is under construction.</p>
    </div>
  )
};
export default MetaTags
