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
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from \'react\';\''\'; import { Button } from \'@/components/ui/button\'; export default function CreatePostButton({ categoryId }) {}; return null} </Button>)} export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton };
const React from "react";"""; import { Button } from "@/components/ui/button"; export default function CreatePostButton({ categoryId }) {}; return null} </Button>)} export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton };""
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/components/community/CreatePostButton.js.jsx
import _React from 'react';'''; import { Button } from '@/components/ui/button'; export default function CreatePostButton({ categoryId }) {}; return null} </Button>)} export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton };
=======
import _React from 'react';'''; import { Button } from '@/components/ui/button'; export default function CreatePostButton({ categoryId }) {}; return null} </Button>)} export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton }; export { CreatePostButton };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src.disabled/src/components/community/CreatePostButton.js.jsx
