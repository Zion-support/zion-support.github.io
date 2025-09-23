import { forwardRef } from 'react'

const Select = forwardRef(({ 
  label, 
  error, 
  options = [],
  className = '', 
  ...props 
}, ref) => {
  const selectClasses = `w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
    error ? 'border-red-500' : 'border-white/20'
  } ${className}`
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-white font-semibold">
          {label} {props.required && <span className="text-red-400">*</span>}
        </label>
      )}
      <select
        ref={ref}
        className={selectClasses}
        {...props}
      >
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-slate-900 text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  )
})

Select.displayName = 'Select'

export default Select