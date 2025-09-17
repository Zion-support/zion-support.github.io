<<<<<<< HEAD
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey[\'order\',orderId],; \"queryFn\": async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error(\'Failed to fetch order\')}; return(await res.json())},; \"enabled\": \'!!orderId\'})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey[\'order\',orderId],; \"queryFn\": async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error(\'Failed to fetch order\')}; return(await res.json())},; \"enabled\": \'!!orderId\'})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey[\'order\',orderId],; \"queryFn\": async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res && res.ok) {; throw new Error(\'Failed to fetch order\')}; return (await res && res.json())},; \"enabled\": \'!!orderId\'})};

const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res && res.ok) {; throw new Error("Failed to fetch order")}; return (await res && res.json())},; enabled: "!orderId"})};'"`'"`

=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey[\'order\',orderId],; \"queryFn\": async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error(\'Failed to fetch order\')}; return(await res.json())},; \"enabled\": \'!!orderId\'})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
=======
import { useQuery } from \'@tanstack/react-query\'; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey[\'order\',orderId],; \"queryFn\": async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error(\'Failed to fetch order\')}; return(await res.json())},; \"enabled\": \'!!orderId\'})};
const { useQuery } from "@tanstack/react-query"; export function useGetOrderQuery(orderId) {; return useQuery({; queryKey["order",orderId],; queryFn: async () => {; if(!orderId); return null; const res = await fetch(`/api/orders/${orderId}`); if(!res.ok) {; throw new Error("Failed to fetch order")}; return(await res.json())},; enabled: "!orderId"})};'"`'"`
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
