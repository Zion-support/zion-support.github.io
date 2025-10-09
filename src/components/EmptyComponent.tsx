import React from 'react'
interface EmptyComponentProps {
  // Add props here
}

const EmptyComponent: React.FC<EmptyComponentProps> = () => {
  return (
    <div className="emptycomponent">
      {/* Component content */}
    </div>
  )
}
export default EmptyComponent