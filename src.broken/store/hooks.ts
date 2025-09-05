<<<<<<< HEAD
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux',;
import type { RootState, AppDispatch } from './store',;
;
export const useAppDispatch = () => useDispatch<AppDispatch>(),;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector,;
=======
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux',
import type { RootState, AppDispatch } from './store',

export const useAppDispatch = () => useDispatch<AppDispatch>(),
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
