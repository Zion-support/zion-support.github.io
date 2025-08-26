export const mapProfileToUser = (user: any, profile: any) => {
  return {
    ...user,
    ...profile,
    id: user.id,
    email: user.email
  };
};