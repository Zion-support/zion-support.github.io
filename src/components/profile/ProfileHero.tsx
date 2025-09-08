import React from 'react';

interface ProfileHeroProps {
  name?: string;
  title?: string;
  avatar?: string;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({
  name = "John Doe",
  title = "Software Engineer",
  avatar
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
      <div className="flex items-center space-x-4">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-xl opacity-90">{title}</p>
        </div>
      </div>
    </div>
  );
};