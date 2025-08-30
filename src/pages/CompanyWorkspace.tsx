import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CompanyDashboard } from '@/components/enterprise/workspace/CompanyDashboard';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useParams } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useCompanyWorkspace } from '@/hooks/useCompanyWorkspace';
import { useWhitelabel } from '@/context/WhitelabelContext';
