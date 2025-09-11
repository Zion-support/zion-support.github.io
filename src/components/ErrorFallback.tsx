export const ErrorFallback: Reac t.FC < ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {interface ErrorFallbackProps extends React.PropsWithChildren<{}> {
  error: anyErro r;
  resetErrorBoundary: () => void;
}
  return (
        <div  className="min - h-screen bg-gray - 50 flex items - center justify - center px-4">