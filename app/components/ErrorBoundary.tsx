import { React  Component ReactNode ErrorInfo  from 'react';

interface Props {
  children: ReactNode;
}


  children: ReactNode;,
,

}
interface State {
  hasError: boolean;
  error: Error | undefined;
}


  hasError: boolean;
  error: Error | undefined;,
,

}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {,
    hasError: false,
    error: undefined,
  };

