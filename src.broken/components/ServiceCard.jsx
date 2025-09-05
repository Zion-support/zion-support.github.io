import React from "react";

export default function ServiceCard(_{_service, _onSelect}) {_const _navigate = useNavigate();
  const _location = useLocation();
  const { user} = useAuth();
  const _dispatch = useAppDispatch();

  const _handleClick = () => {_if (onSelect) {
      onSelect(service.id);}
  };

  const _handleSave = (_e) => {_e.stopPropagation();
    if (!user) {
      toast.info('Log in to save favorites');
      navigate(`/login?next=${encodeURIComponent(location.pathname + location.search)}`);
      return;
    }
    dispatch(addToWishlist({_id: service.id, _type: 'service', _data: service}));
    fetch(`${_getApiUrl()}/wishlist`, {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_id: service.id, _type: 'service'})
    }).catch__(() => {});
  };

  return (
    <div
      data-testid={_`service-card-${service.id}`}
      onClick={_handleClick}
      className="cursor-pointer p-4 border border-zion-blue-light rounded-lg bg-zion-blue-dark hover:border-zion-purple/50 relative"
    >
      <button
        onClick={_handleSave}
        aria-label="save-to-wishlist"
        className="absolute top-2 right-2 text-zion-slate-light hover:text-zion-cyan"
      >
        <Heart className="w-4 h-4" />
      </button>
      <h3 className="text-white font-medium">{_service.title}</h3>
    </div>
  );
}
