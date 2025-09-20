import React from 'react',
<<<<<<< HEAD: src.broken/components/profile/ProfileLoadingState.tsx
export function ProfileLoadingState() {,
  return (,
    <div>,
      <h1>Component</h1>,
      <p>Component placeholder</p>,
    </div>),
}
,
=======

export const ProfileLoadingState: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-blue mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Loading profile...</p>
      </div>
    </div>
  )
},
>>>>>>> origin/zion-enhancements-v6:src/components/profile/ProfileLoadingState.tsx
