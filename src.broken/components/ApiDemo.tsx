import React, { useState, useEffect } from 'react';
import { api, ApiResponse } from '@/services / api';
export default function Page() {
}}}

interface User {
  id: number;
  name: string;
  email: string;
  createdAt?: string;

const ApiDemo: React.FC = (): JSX.Element => {;
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
const [newUser, setNewUser] = useState({ name: '', email: ''});
  const [healthStatus, setHealthStatus] = useState<any>('Checking...');

  // Check API health on component mount
  useEffect(() => {
    checkHealth () ;
    fetchUsers () }, []) ;

    try {;
      
      setHealthStatus(`✅ API Healthy - ${response.data?.environment} mode`) } catch(err) {

      setHealthStatus('❌ API Unhealthy')};

    setLoading(true) ;
    setError(null) ;

    try {
      
      if(response.success && response.data) {

        setUsers(response.data)} catch(err) {

      setError(err instanceof Error ? err.message : 'Failed to fetch users')} finally {

      setLoading(false)};

    e.preventDefault () ;

                onChange = { (e) => setNewUser(prev => ({ ...prev,
  name: e.target.value
                onChange = { (e) => setNewUser(prev => ({ ...prev,
  email: e.target.value
