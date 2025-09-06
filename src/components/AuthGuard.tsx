if (!requireAuth({ showToast: false })) return false,

    const userRoles = user?.role ? [user.role] : [];