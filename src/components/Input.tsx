import React, { forwardRef, useState } from 'react';
import './Input.css';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      variant = 'default',
      size = 'medium',
      fullWidth = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    return (
      <div className={`input-container ${fullWidth ? 'input-container--full-width' : ''}`}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
            {props.required && <span className="input-required">*</span>}
          </label>
        )}
        <div
          className={`input-wrapper input-wrapper--${variant} input-wrapper--${size} ${
            isFocused ? 'input-wrapper--focused' : ''
          } ${error ? 'input-wrapper--error' : ''} ${className}`}
        >
          {leftIcon && (
            <span className="input-icon input-icon--left" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className="input"
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {rightIcon && (
            <span className="input-icon input-icon--right" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
        {(error || helperText) && (
          <div className="input-message">
            {error && (
              <span className="input-error" role="alert">
                {error}
              </span>
            )}
            {helperText && !error && (
              <span className="input-helper">
                {helperText}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;