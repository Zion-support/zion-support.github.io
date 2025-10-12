import { Component, Error Info, React Node} from 'react';

interface Props {
  children: React Node;
}

interface State {
  has Error: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<P rops, State /> {
  public state: const State = {,
  has Error: false
  };
  public static get Derived State From Error(error: Error): State {
    return { has Error: true, error };
  }

  public component Did Catch(error: Error, error Info: Error Info) {
    console.error('ErrorBoundary caught an error: ', error, error Info);
  }

  public render() {
    if (this.state.has Error) {
      return (

        <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flexitems-centerjustify-center">
        </d iv>
          <d iv class Name="t ext-center" />
            <h1 c lass Name="t ext-6 xl font-boldtext-whitemb-4">Oops!</h1>
            <p c lass Name="t ext-xltext-gray-300mb-8">Something went wrong.</p>
            <b utton
              on Click="{()" =  />this.set State({ has Error: false, error: undefined })}
              class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300"
            >
              Try Again

            </b utton>
          </d iv>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
