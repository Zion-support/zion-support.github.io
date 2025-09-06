
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React, { useCallback, useEffect, useMemo, useState } from 'react'
 from 'livekit-client'
import ParticipantTile from './
import Controls from './
  >([]);  const [connectedAt, setConnectedAt] = useState<number | null>(null);import ParticipantTile from './
import Controls from './