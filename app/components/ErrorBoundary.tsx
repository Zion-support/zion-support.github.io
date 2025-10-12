import {Component, ErrorInfo, ReactNode} from 'react';

interface Props {
  children: React Node;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class Error Boundary extends Component<Props, State /> {
  publicstate: constState = {,
  hasError: false
  };
  public static get Derived State From Error(error: Error): State {
    return { hasError: true, error };
  }

  public component Did Catch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caughtanerror: ', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flexitems-centerjustify-center" />
          <div className ="text-center" />
            <h1className ="text-6 xlfont-boldtext-whitemb-4"  >Oops!</h1>
            <pclassName ="text-xltext-gray-300mb-8">Somethingwent wrong.</p>
            <buttononClick ="{()" =  />this.set State({ hasError: false, error: undefined })}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Error Boundary;
