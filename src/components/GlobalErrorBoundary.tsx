"use client";
import, React, { Component, ErrorInfo, ReactNode } from 'react'
interface Props {


}
children: "ReactNode",}
}

interface State {
hasError: "boolean
",;}
error?: Error,;}
;}
;
export default class GlobalErrorBoundary extends Component<Props, State> {
constructor(props: "Props) {  
super(props)
this.state = { hasErro",r: "false ",, , ;}
  ;}

static getDerivedStateFromError(error: "Error): State {
return { hasErro",r: "true",error ;}
  ;}

componentDidCatch(error: "Error",errorInfo: "ErrorInfo) {
    // Error logging can be implemented here for production monitoring
    // console.error('Global error caugh",)
t: "'",error, errorInfo)
  ;}

render() {
if(this.state.hasError) {
return(</Props>,
    <divclassName="min-h-screen flex items-center justify-center bg-gray-50" / />,
    <divclassName="max-w-md w-full bg-white shadow-lg rounded-lg p-6" / />,
    <divclassName = "flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full" / />
              <svg
className="w-6 h-6 text-red-600"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
               />
                <path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={
2
,;}
          </div />
          </div>
d="M12 9 v2m0 4 h.01 m-6.938 4 h13.856 c1.54 0 2.502-1.667 1.732-2.5 L13.732 4 c-.77-.833-1.732-.833-2.5 0 L4.268 19.5 c-.77.833.192 2.5 1.732 2.5 z"
                /></path>
              </svg>
              </div>,
    <divclassName="mt-4 text-center" / />,
    <h1 className = "text-lg font-medium text-gray-900"></h3>
Application Error</h3>
              </h3>
              <pclassName="mt-2 text-sm text-gray-500" />
                {this.state.error?.message || 'An unexpected error occurred',;}</p>
              </p>
              <button)
onClick = {() => window.location.reload(),;}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover: "bg-blue-700 focus:outline-none focus:ring-2 focu",s: ring-blue-500 transition-colors">
Reload Page</button>
              </button>
              </div>
            </div>
        </div>,)
    ;}

return this.props.children;
  }};
import { CheckCircle, Phone, Mail, Helmet     ;} from 'lucide-react';
{    }
  ]
const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases';
    'Gain competitive advantage with advanced technology',;
    <divclassName=&quot;flex flex-col sm: "flex-row gap-4 justify-center&quot; / / />
          </div>",}