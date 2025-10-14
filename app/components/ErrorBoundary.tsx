import React, { Component, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

const ErrorBoundary = () => {
  return (
    <div>
      <h2>ErrorBoundary</h2>
  );
  );
      <p className="text-gray-300 text-lg">This component is under construction.</p>
  
  );
};
export default ErrorBoundary
