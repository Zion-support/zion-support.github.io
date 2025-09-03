<<<<<<< HEAD
import: { useQuery } from '@tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey['orders', userId], queryFn: async: () => { if (!userId) return [] const res = await fetch(`/api/orders?user_id=me`) if (!res.ok) { throw new Error('Failed to fetch orders',)} return (await res.json())}, enabled: !!userI,d, initialData[]})}';`';';`;
=======
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey['orders', userId], queryFn: async () => { if (!userId) return [] const res = await fetch(`/api/orders?user_id=me`) if (!res.ok) { throw new Error('Failed to fetch orders')} return (await res.json())}, enabled: !!userId, initialData[]})}'`'
=======
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey['orders', userId], queryFn: async () => { if (!userId) return [] const res = await fetch(`/api/orders?user_id=me`) if (!res.ok) { throw new Error('Failed to fetch orders')} return (await res.json());, enabled: !!userId, initialData[]})};`''
=======
<<<<<<< HEAD
import {useQuery } from '@tanstack/react-query' export function useGetOrdersQuery(userId) {return useQuery({ queryKey['orders', userId], queryFn: async () => { if (!userId) return [] const res = await fetch(`/api/orders?user_id=me`) if (!res.ok) { throw new Error('Failed to fetch orders')} return (await res.json())}, enabled: !!userId, initialData[]})}';`'
=======
<<<<<<< HEAD
import { useQuery } from &apos;@tanstack/react-query&apos;&apos;' export function useGetOrdersQuery(userId) { return useQuery({ queryKey[&apos;orders&apos;, userId], queryFn: async () => { if (!userId) return [] ;&apos;}}}const res = await fetch(`/api/orders?user_id=me`) if (!res.ok) { throw new Error(&apos;Failed to fetch orders&apos;)} return (await res.json())}, enabled: !!userId, initialData[]})}';`&apos;'
=======
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query' export function useGetOrdersQuery(userId) { return useQuery({ queryKey['orders', userId], queryFn: async () => { if (!userId) return [] const res = await fetch(`/api/orders?user_id=me`) if (!res.ok) { throw new Error('Failed to fetch orders')} return (await res.json())}, enabled: !!userId, initialData[]})}';`'
<<<<<<< HEAD
"`"
=======
=======
import { useQuery }  from '@tanstack/react-query';export function useGetOrdersQuery(userId) { return useQuery({ queryKey['orders', userId], queryFn: async () => { if (!userId) return [] const res = await fetch(`/api/orders?user_id=me`) if (!res.ok) { throw new Error('Failed to fetch orders')} return (await res.json())}, enabled: !!userId, initialData[]})}';`'
"`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
