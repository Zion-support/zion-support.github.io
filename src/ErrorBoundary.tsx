import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
children: ReactNode;
}
fallback?: ReactNode;}
};interface State {
  
hasError: boolean;
error?: Error;
}
errorInfo?: ErrorInfo;}
};
class; ErrorBoundary; extends Component<PropsState> {
constructor() {
super(props);
this.state = { hasErro;r: false };
className="btn-primary";
type="button";
>;
Refresh Page;
</button>;
{process.env.NODE_ENV === "development" && this.state.error && (;
<details style={{ marginTop: "1rem" }}>;
<summary>Error Details (Development)</summary>;
<pre style={{ ;
background: "#f5f5f5",padding: "1rem"borderRadius: "4px"overflo;w: "auto"fontSiz;e: "12px";
}}>;