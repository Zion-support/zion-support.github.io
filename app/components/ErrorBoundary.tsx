import { Component, ErrorInfo, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBounda r y extends Component<Props, State /> {
  public state: constState= {,
  hasError: false;
  };
  public static getDerivedStateFromErr o r(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCat c h(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBounda r y caught an error: ', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
return (
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="text-6xlfont-boldtext-whitemb-4"  >Oops!</h1>
            <p className="text-xltext-gray-300mb-8">Something went wrong.</p>
            <button;
              onClick="{()" =  />this.setState({ hasError: false, error: undefined ,})}
              className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-3rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-600transition-allduration-300"
            >
              Try Again;
            </button>
          </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBounda r y;
