import React from 'react'

// Root App placeholder to satisfy lint scripts targeting "App.tsx".
// Delegates to the main implementation under src/App.tsx.
// This avoids changing tooling configuration.
import InnerApp from './src/App'

export default function App(): React.ReactElement {
    return <InnerApp />
}

