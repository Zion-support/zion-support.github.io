      });
    }
  }

  render() { 
    if (this.state.hasError) {
      return (
        this.props.fallback || (
              { this.state.error  && this.state.error.toString() }
              <br />
              {this.state.errorInfo?.componentStack}
            </details>
          </div>
        )
      );
    }

  }
}

exportdefaultAdvancedErrorBoundary;
