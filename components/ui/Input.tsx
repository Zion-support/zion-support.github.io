import React from 'react',
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string}
,
const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`px-3 py-2 border border-gray-30o0 rounded-md shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-blue-50o0 ${className}`}
      {...props}
    />)},
export default Input,