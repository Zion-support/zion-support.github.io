
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======

=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
    render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

return { props: {} };
};

}

      <PdfExportButton targetRef={ref} fileName={`resume-${data.name.replace(/\s+/g, '-').toLowerCase()}.pdf`} />
      <ResumePreview ref={ref} data={data} theme={theme} />
    </div>
  )
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
