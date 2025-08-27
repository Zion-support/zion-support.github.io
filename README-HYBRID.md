# 🚀 Vite + Node.js Hybrid App

This is a hybrid application that combines the best of both worlds:
- **Frontend**: Vite + React with lightning-fast HMR and optimized builds
- **Backend**: Node.js + Express with robust API endpoints and business logic

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Vite Dev      │    │   Node.js       │
│   (React)       │◄──►│   Server        │◄──►│   Backend       │
│   Port 3000     │    │   (Proxy)       │    │   (Express)     │
│                 │    │                 │    │   Port 5000     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Development Mode
- **Frontend**: Vite dev server runs on port 3000 with hot module replacement
- **Backend**: Node.js server runs on port 5000 with API endpoints
- **Proxy**: Vite forwards `/api/*` requests to Node.js backend
- **CORS**: Configured for seamless communication between ports

### Production Mode
- **Frontend**: Built by Vite and served by Node.js
- **Backend**: Node.js serves both the API and static frontend files
- **Single Port**: Everything runs on one port (5000 by default)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Install frontend dependencies
yarn install

# Install backend dependencies
cd server && yarn install

# Or install both at once
yarn install:all
```

### 2. Environment Setup
```bash
# Copy backend environment file
cd server
cp .env.example .env

# Edit .env with your configuration
nano .env
```

### 3. Development
```bash
# Run both frontend and backend simultaneously
yarn dev:hybrid

# Or run them separately:
# Terminal 1: Frontend only
yarn dev

# Terminal 2: Backend only
yarn dev:backend
```

### 4. Production Build
```bash
# Build both frontend and backend
yarn build:hybrid

# Start production server
yarn start:hybrid
```

## 📁 Project Structure

```
├── src/                    # Frontend source (React + Vite)
│   ├── components/         # React components
│   ├── services/           # API services
│   └── ...
├── server/                 # Backend source (Node.js + Express)
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic
│   │   └── index.ts        # Main server file
│   ├── package.json        # Backend dependencies
│   └── tsconfig.json       # Backend TypeScript config
├── package.json            # Frontend dependencies & scripts
├── vite.config.ts          # Vite configuration
└── README-HYBRID.md        # This file
```

## 🔧 Available Scripts

### Frontend (Root Directory)
- `yarn dev` - Start Vite dev server
- `yarn build` - Build frontend for production
- `yarn start` - Preview production build

### Backend (Server Directory)
- `yarn dev` - Start Node.js dev server with hot reload
- `yarn build` - Build backend TypeScript
- `yarn start` - Start production backend server

### Hybrid (Root Directory)
- `yarn dev:hybrid` - Start both frontend and backend
- `yarn build:hybrid` - Build both frontend and backend
- `yarn start:hybrid` - Start production hybrid server
- `yarn install:all` - Install dependencies for both
- `yarn lint:all` - Lint both frontend and backend
- `yarn type-check:all` - Type check both frontend and backend

## 🌐 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user by ID

## 🔌 Frontend-Backend Communication

### API Service
The frontend uses a centralized API service (`src/services/api.ts`) that:
- Automatically proxies API calls to the backend in development
- Handles errors and response formatting
- Provides TypeScript types for API responses

### Example Usage
```typescript
import { api } from '@/services/api';

// Get users
const users = await api.getUsers();

// Create user
const newUser = await api.createUser({ name: 'John', email: 'john@example.com' });
```

## 🚀 Deployment

### Option 1: Single Server (Recommended)
1. Build both frontend and backend: `yarn build:hybrid`
2. Deploy the entire project to your server
3. Run: `yarn start:hybrid`
4. Node.js will serve both the API and the built frontend

### Option 2: Separate Deployment
1. Frontend: Deploy built Vite files to a CDN/static host
2. Backend: Deploy Node.js server separately
3. Update frontend API base URL to point to backend

## 🛠️ Customization

### Adding New API Endpoints
1. Create route in `server/src/routes/`
2. Add controller logic in `server/src/controllers/`
3. Mount route in `server/src/index.ts`
4. Add corresponding method in `src/services/api.ts`

### Database Integration
1. Install database driver (e.g., `pg` for PostgreSQL)
2. Create database service in `server/src/services/`
3. Update controllers to use database instead of mock data

### Authentication
1. Add JWT middleware in `server/src/middleware/`
2. Implement auth routes and controllers
3. Add auth state management in frontend

## 🔍 Troubleshooting

### Port Conflicts
- Frontend runs on port 3000
- Backend runs on port 5000
- Update ports in respective config files if needed

### CORS Issues
- Backend CORS is configured for development
- Update `server/src/index.ts` for production domains

### Build Issues
- Ensure both frontend and backend TypeScript compiles
- Check for missing dependencies in both directories

## 📚 Benefits of This Architecture

1. **Development Speed**: Vite's instant HMR for frontend changes
2. **Production Performance**: Optimized frontend builds served by Node.js
3. **Full-Stack Development**: Single language (TypeScript) across the stack
4. **Flexibility**: Choose the best tools for each part of your application
5. **Scalability**: Can easily separate frontend/backend deployment later
6. **Type Safety**: Shared types between frontend and backend
7. **Hot Reload**: Both frontend and backend support hot reloading

## 🤝 Contributing

1. Follow the existing code structure
2. Add types for new API endpoints
3. Update both frontend and backend when making changes
4. Test the hybrid setup before committing

---

**Happy coding with your hybrid Vite + Node.js app! 🎉**