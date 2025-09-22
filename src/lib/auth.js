// Basic authentication utilities
export class AuthService {
  constructor() {
    this.isAuthenticated = false;
    this.user = null;
  }

  // Check if user is authenticated
  checkAuth() {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      const user = localStorage.getItem('user_data');
      
      if (token && user) {
        this.isAuthenticated = true;
        this.user = JSON.parse(user);
        return true;
      }
    }
    return false;
  }

  // Login user
  login(email, password) {
    // Basic validation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // In a real app, this would validate against a backend
    // For now, we'll simulate a successful login
    const user = {
      id: '1',
      email: email,
      name: 'User',
      role: 'user'
    };

    const token = 'mock_token_' + Date.now();

    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(user));
    }

    this.isAuthenticated = true;
    this.user = user;

    return { user, token };
  }

  // Logout user
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
    }

    this.isAuthenticated = false;
    this.user = null;
  }

  // Get current user
  getCurrentUser() {
    if (this.checkAuth()) {
      return this.user;
    }
    return null;
  }

  // Check if user has specific role
  hasRole(role) {
    if (this.user && this.user.role) {
      return this.user.role === role;
    }
    return false;
  }

  // Validate token (in real app, this would check with backend)
  validateToken(token) {
    if (!token) return false;
    
    // Basic token validation
    return token.startsWith('mock_token_');
  }
}

// Create singleton instance
export const authService = new AuthService();

// Export default
export default authService;