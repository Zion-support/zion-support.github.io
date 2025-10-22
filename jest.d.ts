import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toHaveTextContent(text: string | RegExp): R;
      toBeVisible(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toHaveValue(value: string | string[] | number): R;
      toBeChecked(): R;
      toBePartiallyChecked(): R;
      toHaveFormValues(expectedValues: Record<string, string | number | boolean>): R;
      toHaveDisplayValue(value: string | RegExp | (string | RegExp)[]): R;
      toHaveAccessibleDescription(text?: string | RegExp): R;
      toHaveAccessibleName(text?: string | RegExp): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveStyle(css: string | Record<string, string | number>): R;
      toBeRequired(): R;
      toBeInvalid(): R;
      toBeValid(): R;
      toHaveFocus(): R;
      toBeEmptyDOMElement(): R;
    }
  }
}