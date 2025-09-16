import React from 'react';

<<<<<<< HEAD
const label: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">label</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default label;
=======
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "text-sm font-medium text-gray-700", children, ...props }, ref) => {
    return (
      <label ref={ref} className={className} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export default Label;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
