import React from 'react';

interface SlideEditorProps {
  className?: string;
}

const SlideEditor: React.FC<SlideEditorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SlideEditor</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SlideEditor;