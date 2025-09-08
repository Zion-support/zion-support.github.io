import Link from 'next/link';




import Link from 'next / link';
export type Course = {
export type Course = {

  id: string;
  title: string;
  duration_minutes: number;
  level: string;
  is_free: boolean;
  category: string;



export default function CourseCard(): any ({ course }: { course: Course }) {;
  return (

