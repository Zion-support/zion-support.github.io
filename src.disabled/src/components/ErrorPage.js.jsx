
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React from \'react\'; export const ErrorPage = ({} statusCode = 404,\'; title = \'Page Not Found\',\'; message = \'The page you are looking for does not exist.\'
import _React from 'react'; export const ErrorPage = ({} statusCode = 404,'; title = 'Page Not Found','; message = 'The page you are looking for does not exist.'