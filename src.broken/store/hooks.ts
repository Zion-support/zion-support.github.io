import type {_RootState, _AppDispatch} from './store';

export const _useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
