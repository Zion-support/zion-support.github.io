import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Search, X } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ComponentType<{ className?: string }>;
  rightIcon?: React.ComponentType<{ className?: string }>;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  showClearButton?: boolean;
  onClear?: () => void;
  isPassword?: boolean;
  isSearch?: boolean;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      variant = 'default',
      size = 'md',
      showClearButton = false,
      onClear,
      isPassword = false,
      isSearch = false,
      fullWidth = false,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const handleClear = () => {
      if (onClear) {
        onClear();
      } else {
        // Create a synthetic event to clear the input
        const syntheticEvent = {
          target: { value: '' }
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange?.(syntheticEvent);
      }
      setHasValue(false);
    };

    const inputType = isPassword && !showPassword ? 'password' : props.type || 'text';

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg'
    };

    const variantClasses = {
      default: 'bg-white/10 border-white/20 focus:border-cyan-500 focus:ring-cyan-500',
      filled: 'bg-white/20 border-transparent focus:border-cyan-500 focus:ring-cyan-500',
      outlined: 'bg-transparent border-white/30 focus:border-cyan-500 focus:ring-cyan-500'
    };

    const baseClasses = `
      w-full rounded-lg border transition-all duration-200
      text-white placeholder-slate-400
      focus:outline-none focus:ring-2 focus:ring-opacity-50
      disabled:opacity-50 disabled:cursor-not-allowed
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${fullWidth ? 'w-full' : ''}
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
      ${className}
    `;

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-slate-300 mb-2">
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {LeftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
              <LeftIcon className="w-5 h-5" />
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            type={inputType}
            className={`
              ${baseClasses}
              ${LeftIcon ? 'pl-10' : ''}
              ${(RightIcon || showClearButton || isPassword) ? 'pr-10' : ''}
            `}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            onChange={handleInputChange}
            {...props}
          />

          {/* Right Icon or Clear Button */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            {/* Password Toggle */}
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                disabled={disabled}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Clear Button */}
            {showClearButton && hasValue && (
              <button
                type="button"
                onClick={handleClear}
                className="text-slate-400 hover:text-white transition-colors p-1"
                disabled={disabled}
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Right Icon */}
            {RightIcon && !isPassword && !(showClearButton && hasValue) && (
              <RightIcon className="w-5 h-5 text-slate-400" />
            )}
          </div>

          {/* Focus Ring Animation */}
          {isFocused && (
            <motion.div
              className="absolute inset-0 rounded-lg ring-2 ring-cyan-500 ring-opacity-50 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>

        {/* Helper Text */}
        {helperText && !error && (
          <p className="mt-2 text-sm text-slate-400">{helperText}</p>
        )}

        {/* Error Message */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
// Default export for backward compatibility
export default Input;

// Specialized Input Components
export const SearchInput = forwardRef<HTMLInputElement, Omit<InputProps, 'isSearch' | 'leftIcon'>>(
  (props, ref) => (
    <Input
      ref={ref}
      isSearch
      leftIcon={Search}
      placeholder="Search..."
      {...props}
    />
  )
);

SearchInput.displayName = 'SearchInput';

export const PasswordInput = forwardRef<HTMLInputElement, Omit<InputProps, 'isPassword' | 'type'>>(
  (props, ref) => (
    <Input
      ref={ref}
      isPassword
      type="password"
      {...props}
    />
  )
);

PasswordInput.displayName = 'PasswordInput';

export const EmailInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
  (props, ref) => (
    <Input
      ref={ref}
      type="email"
      placeholder="Enter your email address"
      {...props}
    />
  )
);

EmailInput.displayName = 'EmailInput';

export const NumberInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
  (props, ref) => (
    <Input
      ref={ref}
      type="number"
      {...props}
    />
  )
);

NumberInput.displayName = 'NumberInput';

export const TelInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
  (props, ref) => (
    <Input
      ref={ref}
      type="tel"
      placeholder="Enter phone number"
      {...props}
    />
  )
);

TelInput.displayName = 'TelInput';
