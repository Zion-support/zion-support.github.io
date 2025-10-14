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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Error Boundary</h2>
        <p className="text-gray-300 text-lg">This component is under construction.</p>
      </div>
    </div>
  );
};

export default ErrorBoundary;
