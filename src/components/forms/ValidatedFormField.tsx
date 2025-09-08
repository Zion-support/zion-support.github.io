

  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;


    if (typeof value === 'string') {
      if (validation.minLength && value.length < validation.minLength) {
        return `${label} must be at least ${validation.minLength} characters`
      }

      if (validation.maxLength && value.length > validation.maxLength) {
        return `${label} must not exceed ${validation.maxLength} characters`
      }

      if (validation.pattern && !validation.pattern.test(value)) {
        return `${label} format is invalid`
      }
    }

    if (validation.custom) {
      return validation.custom(value)
    }
    return null
  }
  const getValidationIcon = () => {
    if (!showValidIcon |!isTouched |validationState === 'idle') return null
    switch (validationState) {
      case 'validating':
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        return `${label} must be at least ${validation.min_length} characters`;
      }
      // Check condition
if ( {) {
  $2
}
        return `${label} must not exceed ${validation.max_length} characters`;
      }
      if () {) {
  $2
}
        return `${label} format is invalid`;
      }
    }
    // Check condition
if ( {) {
  $2
}
      return validation.custom (value);
    }
    return null;
  }
  const getValidationIcon = () =>: any {
    // Check condition
if (return null) {
  $2
}
    switch (validation_state) {
      case 'validating':;
        return (
          <div className='animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full' />
        )
      case 'valid':
        return <CheckCircle className='h-4 w-4 text-green-500' />
      case 'invalid':
        return <AlertCircle className='h-4 w-4 text-red-500' />
      default:
        return null
    }
  }
  const getFieldClasses = () => {
    if (!isTouched) return ''
    switch (validationState) {
      case 'valid':
        return 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
      case 'invalid':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      default:
        return ''
    }
  }
  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className)
  const render_field = () =>: any {
    const base_classes = cn (getFieldClasses (), class_name);
    switch (type) {



import React, { useState, useEffect } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button',;
interface ValidationRule {;
  required?: boolean,;
  minLength?: number,;
  maxLength?: number,;
  pattern?: RegExp,;

          <div className="relative">
            <Select onValueChange={(value) => form.setValue(name, value)} disabled={disabled}>
              <SelectTrigger className={baseClasses}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>


              {...form.register(name)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
              {getValidationIcon()}
              <Button


                type="button"
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >



                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}


              type={type}
              disabled={disabled}
              className={baseClasses}
              {...form.register(name)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {getValidationIcon()}


        control={form.control}
        name={name}
        render={() => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              {renderField()}
            </FormControl>
            {(fieldError || description) && (
              <div className="space-y-1">
                {fieldError && (
                  <FormMessage className="text-sm text-red-500">


                    {fieldError.message}
                  </FormMessage>
                )}
                {description && !fieldError && (

                  <p className='text-sm text-muted-foreground'>{description}</p>

                  <p className="text-sm text-muted-foreground">{description}</p>
                )}
              </div>
            )}
          </FormItem>
        )}
      />
    )
  }

      render={() => (
        <FormItem>
          <FormLabel className='text-sm font-medium'>
            {label}
            {validation.required && (
              <span className='text-red-500 ml-1'>*</span>
            )}          </FormLabel>
          <FormControl>{renderField()}</FormControl>
          {(fieldError |description) && (
            <div className='space-y-1'>
              {fieldError && (
                <FormMessage className='text-sm text-red-500 flex items-center gap-1'>
                  <AlertCircle className='h-3 w-3' />



      />;
    );
  }
      render={() => (;
        <FormItem>;
          <FormLabel className='text-sm font-medium'>;
            {label}

