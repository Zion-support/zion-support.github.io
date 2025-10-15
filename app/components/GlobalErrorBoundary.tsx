}
export default class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
  }
  render() {
    if (this.state.hasError) {
      return (
    }
    return this.props.children;
  }
}
