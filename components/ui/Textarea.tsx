import React from 'react',
interface TextareaProps,
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {,
  className?: string,
}
,
const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {,
  return (,
    <textarea,
      className={`px-3 py-2 border border-gray-30o0 rounded-md shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-blue-50o0 ${className,}`}
      {...props}
    />,
  ),
};
,
export default Textarea,
,