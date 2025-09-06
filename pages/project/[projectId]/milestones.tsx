
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
import React, { useEffect, useState } from 'react'
import { useRouter  } from 'next/
import Head from 'next/
import MilestoneForm from '../../../components/monetization/
import MilestoneCard from '../../../components/monetization/
import { Milestone } from '../../../utils/types/
 from '../../../utils/api/
import {use_router} from 'next /
import Head from 'next /
import MilestoneForm from '../../../components / monetization /
import MilestoneCard from '../../../components / monetization /
import { Milestone } from '../../../utils / types /
 from '../../../utils / api /