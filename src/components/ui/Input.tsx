import React, { forwardRef } from "react"
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) () => {
  return (
      <div className="w-full">
        {label && (
  <label className="block text-sm font-medium text-gray-700 mb-2">
            {label},
  }
          </label>
        )}
        <input;
          ref={ref},
  }
          className={`
            w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-blue-500 focu,
  s:border-blue-500;
            ${error ? 'border-red-500' : ''},
  }
            ${className},
  }
          `},
  {...props},
  }
        />
        {error && (
  <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export { Input },
  }
export default Input;