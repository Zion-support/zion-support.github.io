<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
import { createContext,useContext,useEffect,useState } from 'react'; import { toggleFavorite as toggleFavoriteRequest } from '@/api/favorites'; ) {; const [favorites,setFavorites] = useState([]); useEffect(() => {; return () => {};},[]);,[]); const stored = localStorage.getItem('favorites'); if(stored) {; try {; setFavorites(JSON.parse(stored));} catch {} } },[]); useEffect(() => {; return () => {};},[]);,[]); localStorage.setItem('favorites',JSON.stringify(favorites));},[favorites]); const toggleFavorite = async productId => {; try {; await toggleFavoriteRequest(productId); setFavorites(prev => prev.includes(productId); ? prev.filter(id => id !== productId); : [...prev,productId]; );} catch(err) {; _console.error('Toggle favorite failed',err);} }; const isFavorite = id => favorites.includes(id); return (<FavoritesContext.Provider value={{ favorites,toggleFavorite,isFavorite }}> {children} ></div> );} ; export function useFavorites() {; return useContext(FavoritesContext);}
import { createContext,useContext,useEffect,useState } from \'react\'; import { toggleFavorite as toggleFavoriteRequest } from \'@/api/favorites\'; ) {; const [favorites,setFavorites] = useState([]); useEffect(() => {; return () => {};},[]);,[]); const stored = localStorage.getItem(\'favorites\'); if(stored) {; try {; setFavorites(JSON.parse(stored));} catch {} } },[]); useEffect(() => {; return () => {};},[]);,[]); localStorage.setItem(\'favorites\',JSON.stringify(favorites));},[favorites]); const toggleFavorite = async productId => {; try {; await toggleFavoriteRequest(productId); setFavorites(prev => prev.includes(productId); ? prev.filter(id => id !== productId); : [...prev,productId]; );} catch(err) {; console.error(\'Toggle favorite failed\',err);} }; const isFavorite = id => favorites.includes(id); return (<FavoritesContext.Provider value={{ favorites,toggleFavorite,isFavorite }}> {children} ></div> );} ; export function useFavorites() {; return useContext(FavoritesContext);}
const { createContext,useContext,useEffect,useState } from "react"; import { toggleFavorite as toggleFavoriteRequest } from "@/api/favorites"; ) {; const [favorites,setFavorites] = useState([]); useEffect(() => {; return () => {};},[]);,[]); const stored = localStorage.getItem("favorites"); if(stored) {; try {; setFavorites(JSON.parse(stored));} catch {} } },[]); useEffect(() => {; return () => {};},[]);,[]); localStorage.setItem("favorites",JSON.stringify(favorites));},[favorites]); const toggleFavorite = async productId => {; try {; await toggleFavoriteRequest(productId); setFavorites(prev => prev.includes(productId); ? prev.filter(id => id !== productId); : [.prev,productId]; );} catch(err) {; console.error("Toggle favorite failed",err);} }; const isFavorite = id => favorites.includes(id); return (<FavoritesContext.Provider value={{ favorites,toggleFavorite,isFavorite }}> {children} ></div> );} ; export function useFavorites() {; return useContext(FavoritesContext);}''"
import { createContext,useContext,useEffect,useState } from 'react'; import { toggleFavorite as toggleFavoriteRequest } from '@/api/favorites'; ) {; const [favorites,setFavorites] = useState([]); useEffect(() => {; return () => {};},[]);,[]); const stored = localStorage.getItem('favorites'); if(stored) {; try {; setFavorites(JSON.parse(stored));} catch {} } },[]); useEffect(() => {; return () => {};},[]);,[]); localStorage.setItem('favorites',JSON.stringify(favorites));},[favorites]); const toggleFavorite = async productId => {; try {; await toggleFavoriteRequest(productId); setFavorites(prev => prev.includes(productId); ? prev.filter(id => id !== productId); : [...prev,productId]; );} catch(err) {; _console.error('Toggle favorite failed',err);} }; const isFavorite = id => favorites.includes(id); return (<FavoritesContext.Provider value={{ favorites,toggleFavorite,isFavorite }}> {children} ></div> );} ; export function useFavorites() {; return useContext(FavoritesContext);}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
