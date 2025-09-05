<<<<<<< HEAD
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux',
import type { RootState, AppDispatch } from './store',

export const useAppDispatch = () => useDispatch<AppDispatch>(),
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector,
=======
import type {_RootState, _AppDispatch} from './store';

export const _useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
